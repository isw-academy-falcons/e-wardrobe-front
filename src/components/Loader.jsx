import React from "react";
import { Dna } from  'react-loader-spinner'

export default function Loader({ isLoading }) {
  return isLoading ? (
    <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  ) : null;
}
