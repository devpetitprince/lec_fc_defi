/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IExchange,
  IExchangeInterface,
} from "../../../contracts/interfaces/IExchange";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_minTokens",
        type: "uint256",
      },
    ],
    name: "ethToTokenSwap",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_minTokens",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "ethToTokenTransfer",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export class IExchange__factory {
  static readonly abi = _abi;
  static createInterface(): IExchangeInterface {
    return new utils.Interface(_abi) as IExchangeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IExchange {
    return new Contract(address, _abi, signerOrProvider) as IExchange;
  }
}
