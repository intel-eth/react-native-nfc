const STRINGS = {
  splashScreen: {
    unlock_The: 'Unlock The',
    digital_Universe: 'Digital Universe',
    splash_Desc:
      'Mint your own unique NFTs today and join the revolution in digital ownership',
    // userRole: (admin: boolean) => (admin ? 'Admin' : 'Patients'),
  },
  login: {
    loginHeader: 'Login with a wallet to start NFT minting',
  },
  home: {
    no_Minting: 'There is no minting in progress',
  },
  // home: {
  //   firstBoxTitle: (userRole: string) =>
  //     userRole == 'ADMIN'
  //       ? 'Appointments'
  //       : userRole == 'THERAPIST'
  //       ? 'Patients Today'
  //       : userRole == 'PATIENT'
  //       ? 'Package'
  //       : '',
  // },

  bottomSheet: {
    loginHeader: 'Login',
    registration_complete: 'Registration has been completed What next?',
  },

  buttonTitle: {
    login: 'Log in',
    continue: 'Continue',
    okay: 'Okay',
    close: 'Close',
  },
};
export default STRINGS;

// Toast Configuration Settings
export const ERROR_TOAST = 'errorToast';
export const SUCCESS_TOAST = 'successToast';
export const TOP = 'top';
export const BOTTOM = 'bottom';
// ----------------------------

// Login Bottom Sheet Data
export const loginBottomSheet = [
  {string: 'Connect wallet', id: '1'},
  {string: 'Sign message', id: '2'},
];
// Add NFC Bottom Sheet Data
export const addNFCBottomSheet = [
  {string: 'Go to the Marketplace', id: '1'},
  {string: 'Click “Create”', id: '2'},
  {string: 'Choose “NFT Mint”', id: '3'},
];
