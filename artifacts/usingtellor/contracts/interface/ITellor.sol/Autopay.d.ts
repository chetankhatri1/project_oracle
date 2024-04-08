// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface Autopay$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "Autopay",
  "sourceName": "usingtellor/contracts/interface/ITellor.sol",
  "abi": [
    {
      "inputs": [],
      "name": "getStakeAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "stakeAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "token",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "Autopay",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<Autopay$Type["abi"]>>;
  export function deployContract(
    contractName: "usingtellor/contracts/interface/ITellor.sol:Autopay",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<Autopay$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "Autopay",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<Autopay$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "usingtellor/contracts/interface/ITellor.sol:Autopay",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<Autopay$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "Autopay",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<Autopay$Type["abi"]>>;
  export function getContractAt(
    contractName: "usingtellor/contracts/interface/ITellor.sol:Autopay",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<Autopay$Type["abi"]>>;
}