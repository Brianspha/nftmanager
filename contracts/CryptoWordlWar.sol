pragma solidity >=0.5.0;

//@dev contract is not optimised for gas
import "./ERC721Full.sol";
contract CryptoWorldWar is ERC721Full {

    /*==============Struct Definition Section==============*/
    /*
    *@dev represents a Collectible stored by the contract
    @atr id represents the owner of the Collectible
    @atr Index the id in the mapping of the current Collectible
    @atr Value represents the value of the Collectible
    @atr Description represents a description of what the Collectible is
    @atr name the name of the collectible
    */
    struct Collectible {
        address owner;
        uint256 index;
        uint256 value;
        string description;
        bool active;
        string name;
        string dateCreated;
        string transactionHash;
        uint256 level;
        uint256 currentIndexMain;
    }
    /*
    *@dev represents a player that play CryptoWorldWar
    @atr id represents the id of the player
    @atr ranking represents the ranking compared to other players
    */
    struct Player {
        address id;
        uint256 ranking;
        uint256[] OwnedCollectiblesKeys;
        mapping(uint256 => Collectible) ownedCollectibles;
        bool active;
    }
    /*==============events Definition Section==============*/
    event emitId(uint256 tokenID);
    /*==============modifier Definition Section==============*/
    modifier onlyAdmin() {
        require(msg.sender == owner);
        _;
    }
    /*==============contract variable Definition Section==============*/
    /*@dev maps a Collectible Id to its corresponding Collectible Item*/
    uint256[] CollectibleKeys;
    mapping(uint256 => Collectible) Collectibles;
    mapping(address => Player) Players;
    address owner;
    uint256 currentIndex;
    uint256 maxLevel;
    /*==============function Definition Section==============*/
    constructor(string memory name, string memory symbol) public ERC721Full(name, symbol) {
        require(msg.sender != address(0), "Invalid contract creator address");
        currentIndex = 0;
        owner = msg.sender;
        maxLevel = 80;
    }

    /*==============Player Definition Section==============*/

    function registerPlayer() public returns(bool) {
        require(msg.sender != address(0), "Invalid Player address");
        require(!Players[msg.sender].active, "Player already registered");
        Players[msg.sender].active = true;
        Players[msg.sender].id = msg.sender;
        return true;
    }

    function getPlayerCollectibleCount() public view returns(uint256) {
        require(msg.sender != address(0), "Invalid sender address");
        require(Players[msg.sender].active, "Player not registered");
        return balanceOf(msg.sender);
    }
    /*==============Collectible Definition Section==============*/

    function mintNewCollectible(uint256 value, string memory description, string memory name, string memory date, uint256 level) public
    returns(bool) {
        require(msg.sender != address(0), "Invalid sender address");
        require(Players[msg.sender].active, "Player not registered");
        require(level > 0 && level < maxLevel, "Level exceeds the maximum allowed level for a Collectible or is less than 0");
        _mint(msg.sender, currentIndex);
        CollectibleKeys.push(currentIndex);
        Collectibles[currentIndex] = Collectible(msg.sender, currentIndex, value,
            description, true, name, date, "", level, CollectibleKeys.length - 1);
        Players[msg.sender].ownedCollectibles[currentIndex] = Collectibles[currentIndex];
        emit emitId(currentIndex);
        currentIndex++;
        return true;
    }

    function updateCollectibleHash(string memory Thash, uint256 collectibleId) public returns(bool) {
        require(msg.sender != address(0), "Invalid sender address");
        require(_exists(collectibleId), "Collectible does not exist");
        Players[msg.sender].ownedCollectibles[collectibleId].transactionHash = Thash;
        Collectibles[collectibleId].transactionHash = Thash;
        return true;
    }

    function getTotalSupply() public view returns(uint256) {
        return
        totalSupply();
    }

    function transferCollectible(uint256 collectibleId, address to) public returns(bool) {
        require(msg.sender != address(0), "Invalid sender address");
        require(to != address(0), "Invalid destination address");
        require(collectibleId >= 0, "Invalid Collectible id");
        require(Players[msg.sender].active, "Player not registered");
        require(Players[to].active, "Destination address not registered as player");
        require(ownerOf(collectibleId) == msg.sender, "You cannot transfer a collectible item you dont own");
        require(msg.sender != to, "You cannot transfer a collectible item you currently own to yourself");
        transferFrom(msg.sender, to, collectibleId);
        Players[msg.sender].ownedCollectibles[collectibleId].owner=to;
        Players[to].ownedCollectibles[collectibleId] = Players[msg.sender].ownedCollectibles[collectibleId];
        Players[to].OwnedCollectiblesKeys.push(collectibleId);
        delete Players[msg.sender].ownedCollectibles[collectibleId];
        return true;
    }

    function getCollectibelDetails(uint256 collectibleId) public view returns(uint256 value, string memory description,
        string memory name, address tokenowner, uint256 level, string memory date, string memory thash, uint256 indexMain) {
        require(msg.sender != address(0), "Invalid sender address");
        require(Players[msg.sender].active, "Player not registered");
        require(_exists(collectibleId), "Collectible doesnt exist");
        description = Collectibles[collectibleId].description;
        name = Collectibles[collectibleId].name;
        value = Collectibles[collectibleId].value;
        tokenowner = Collectibles[collectibleId].owner;
        level = Collectibles[collectibleId].level;
        date = Collectibles[collectibleId].dateCreated;
        indexMain = Collectibles[collectibleId].currentIndexMain;
        thash = Collectibles[collectibleId].transactionHash;

    }

    /*==============Admin Definition Section==============*/
    function burnCollectible(uint256 collectibleId) onlyAdmin public returns(bool) {
        require(msg.sender != address(0), "Invalid sender address");
        require(_exists(collectibleId), "Collectible doesnt exist");
        _burn(Collectibles[collectibleId].owner, collectibleId);
        delete Players[Collectibles[collectibleId].owner].ownedCollectibles[collectibleId];
        delete Collectibles[collectibleId];
        return true;
    }

    function getAllCollectibleKeys() onlyAdmin public view returns(uint256[] memory keys) {
        require(msg.sender != address(0), "Invalid sender address");
        return CollectibleKeys;
    }

    function updateMaxCollectibleLevel(uint256 newlevel) onlyAdmin public returns(bool) {
        require(msg.sender != address(0), "Invalid sender address");
        require(newlevel > 0, "Invalid new level");
        maxLevel = newlevel;
    }
}