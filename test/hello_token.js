const HelloToken = artifacts.require("HelloToken");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
// contract("HelloToken", function (/* accounts */) {
//   it("should assert true", async function () {
//     await HelloToken.deployed();
//     return assert.isTrue(true);
//   });
// });
contract("HelloToken", ()=>{
  it("hello function call",async ()=>{
    let instance = await HelloToken.deployed()
    let result = await instance.hello()
    console.log(`이 친구는 콘솔로그 : `, result)
    return result
  })
})

