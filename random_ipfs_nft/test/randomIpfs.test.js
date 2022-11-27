const { expect } = require("chai")
const { network, ethers, getNamedAccounts, deployments } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config")

!developmentChains.includes(network.name) 
   ? describe.skip
   : describe("Random IPFS NFT Unit Tests", function(){
      let randomIpfsNft, deployer, vrfCoordinatorV2Mock

      beforeEach(async ()=>{
         deployer = (await getNamedAccounts()).deployer
         await deployments.fixture(["mocks", "random"])
         randomIpfsNft = await ethers.getContract("RandomIpfsNft")
         vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock")
      })

      describe("Constructor", ()=>{
         it("sets starting values correctly", async ()=>{
            const dogTokenUri = await randomIpfsNft.getDogTokenUri(0)
            const initialized = await randomIpfsNft.getInitialized()

            expect(dogTokenUri).to.include("ipfs")
            expect(initialized).to.equal(true)
         })
      })

      describe("requestNft", ()=>{
         it("reverts when no ETH is send", async ()=>{
            await expect(randomIpfsNft.requestNft())
               .to
               .be
               .revertedWithCustomError(
                  randomIpfsNft,
                  "RandomIpfsNft__NeedMoreETHSent"
               )
         })
      })

      describe("fulfillRandomWords", ()=>{
         
      })

      describe("getBreedFromModdedRng", ()=>{

      })
   })