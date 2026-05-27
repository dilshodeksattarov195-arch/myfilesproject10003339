const helperCenderConfig = { serverId: 6089, active: true };

const helperCenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_6089() {
    return helperCenderConfig.active ? "OK" : "ERR";
}

console.log("Module helperCender loaded successfully.");