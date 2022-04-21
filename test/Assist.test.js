// test/Box.test.js
// Load dependencies
const { expect } = require('chai');

// Import utilities from Test Helpers
const { BN, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

// Load compiled artifacts
const Assist = artifacts.require('Assist');

// Start test block
contract('Assist', function ([ owner, other ]) {
  
  
   const address = '0x20Ef43F2b8CDd622733e8c944e596A928065c538';
   var _name = "Flokitest"
   var symbol = 'FIT'

  beforeEach(async function () {
    this.Assist = await Assist.new(owner);
  });

  
  it('getOwner returns address accounts[0]', async function () {
    await this.Assist.getOwner();

    // Use large integer comparisons
    expect(await this.Assist.getOwner()).to.be.equal(address);
  });

  it(' updateNameAndSymbol emits  events', async function () {
    
    const receipt = await this.Assist.updateNameAndSymbol(_name, symbol, { from: owner });

    // Test that a ValueChanged event was emitted with the new value
    expectEvent(receipt, 'nameUpdated', {_name: _name });
    expectEvent(receipt, 'symbolUpdated', { symbol:symbol });

  });

  it('non owner cannot update name and symbol', async function () {
    // Test a transaction reverts
    await expectRevert(
      this.Assist.updateNameAndSymbol(_name, symbol, { from: other }),
      'Ownable: caller is not the owner',
    );
  });
});
//These will test properties of the Assist contract 