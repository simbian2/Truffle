const HelloToken = artifacts.require("HelloToken");
//migrations에서 가져 온다.
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
//migrations에서 가져 온 것에서 instance해서 hello로 함수 바로 호출!!
contract("HelloToken", ()=>{
  it("hello function call",async ()=>{
    let instance = await HelloToken.deployed()
    let result = await instance.hello()
    console.log(`이 친구는 콘솔로그 : `, result)
    return result
  })
})

