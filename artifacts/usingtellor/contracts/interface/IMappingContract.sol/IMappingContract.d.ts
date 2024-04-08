// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface IMappingContract$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "IMappingContract",
  "sourceName": "usingtellor/contracts/interface/IMappingContract.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_id",
          "type": "bytes32"
        }
      ],
      "name": "getTellorID",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
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
    contractName: "IMappingContract",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<IMappingContract$Type["abi"]>>;
  export function deployContract(
    contractName: "usingtellor/contracts/interface/IMappingContract.sol:IMappingContract",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<IMappingContract$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "IMappingContract",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<IMappingContract$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "usingtellor/contracts/interface/IMappingContract.sol:IMappingContract",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<IMappingContract$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "IMappingContract",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<IMappingContract$Type["abi"]>>;
  export function getContractAt(
    contractName: "usingtellor/contracts/interface/IMappingContract.sol:IMappingContract",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<IMappingContract$Type["abi"]>>;
}
