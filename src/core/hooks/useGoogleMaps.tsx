import axios from 'axios';
import { CONSTANT_GOOGLE_MAPS_API_KEY as mapsApiKey } from '@/core/utils/constants';
import { useState } from 'react';

export const useGoogleMaps = () => {
  const [validAddressData, setValidAddressData] = useState<any>(null);

  const validateAddress = async ({ address }: { address: string }) => {

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address,
        )}&key=${mapsApiKey}`,
      );

      const data = response.data;

      setValidAddressData({
        address: data.results[0].formatted_address,
        status: 'Valid Address',
      });
    } catch (error) {
      setValidAddressData({ address: '', status: 'Invalid Address' });
      console.log('error', error);
    }
  };

  return { validateAddress, validAddressData };
};
