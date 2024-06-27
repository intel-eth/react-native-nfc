import * as Yup from 'yup';

export const AddNFCSchema = Yup.object().shape({
  nfcID: Yup.string().required('NFC ID is Required'),
  artworkName: Yup.string().required('Artwork name is required'),
});
