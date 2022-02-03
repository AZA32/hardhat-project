import {ethers} from "hardhat";
import {Greeter, Greeter__factory} from "../typechain-types";

async function main() {
    let provider = ethers.provider;
    console.log(await provider.getNetwork())
    let [owner] = await ethers.getSigners();
    console.log("owner address %s", owner.address);
    console.log("owner balance %s", await owner.getBalance());

    let factory = (await ethers.getContractFactory('Greeter')) as Greeter__factory;
    let contract: Greeter = await factory.deploy("hello world");
    await contract._deployed();
    console.log("contract address %s", contract.address);
    let tx = {
        to: contract.address,
        value: ethers.utils.parseEther("2")
    }
    let bigNumber = await owner.getBalance();
    console.log("owner balance %s", bigNumber);
    await owner.sendTransaction(tx);
    let balance = await provider.getBalance(contract.address);
    console.log("contract balance %s", ethers.utils.formatEther(balance));
    let greeting = await contract.setGreeting("1");
    console.log(greeting);
    let contractTransaction = await contract.getAbiEncodeSignature("1");
    console.log(contractTransaction);
    let s = await contract.getAiEncodePacked("1");
    console.log("s", s);
    let call = await contract.call();
    console.log("call", call);

}

main().then(() => process.exit(0)).catch((error) => {
    console.log(error);
    process.exit(1);
})