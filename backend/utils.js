const { ecoEarnContract } = require('./thor');
const { unitsUtils } = require('@vechain/sdk-core');

async function registerSubmission(submission) {
    let isSuccess = false;
    let txID = null;
    try {
        const result = await (
            await ecoEarnContract.transact.registerValidSubmission(
                submission.walletAddress,
                unitsUtils.parseUnits(submission.amount, 'ether')
            )
        ).wait();
        isSuccess = !result.reverted
        txID = result.meta.txID;
        
        console.log(isSuccess)
        console.log(result)
    } catch (error) {
        console.error('Error registering submission:', error);
    }
    return { isSuccess, txID };
}

module.exports = { registerSubmission };
