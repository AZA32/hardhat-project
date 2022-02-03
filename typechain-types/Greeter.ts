/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface GreeterInterface extends utils.Interface {
  contractName: "Greeter";
  functions: {
    "call()": FunctionFragment;
    "getAbiEncodeSignature(string)": FunctionFragment;
    "getAiEncodePacked(string)": FunctionFragment;
    "getArray()": FunctionFragment;
    "getEncode()": FunctionFragment;
    "greet()": FunctionFragment;
    "opAssembly(uint256,uint256)": FunctionFragment;
    "setGreeting(string)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "call", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAbiEncodeSignature",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAiEncodePacked",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getArray", values?: undefined): string;
  encodeFunctionData(functionFragment: "getEncode", values?: undefined): string;
  encodeFunctionData(functionFragment: "greet", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "opAssembly",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setGreeting", values: [string]): string;

  decodeFunctionResult(functionFragment: "call", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAbiEncodeSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAiEncodePacked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getArray", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getEncode", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "greet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "opAssembly", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setGreeting",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Greeter extends BaseContract {
  contractName: "Greeter";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GreeterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    call(overrides?: CallOverrides): Promise<[string]>;

    getAbiEncodeSignature(
      param: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getAiEncodePacked(
      param: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getArray(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    getEncode(overrides?: CallOverrides): Promise<[string]>;

    greet(overrides?: CallOverrides): Promise<[string]>;

    opAssembly(
      _a: BigNumberish,
      _b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setGreeting(
      _greeting: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  call(overrides?: CallOverrides): Promise<string>;

  getAbiEncodeSignature(
    param: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getAiEncodePacked(param: string, overrides?: CallOverrides): Promise<string>;

  getArray(overrides?: CallOverrides): Promise<BigNumber[]>;

  getEncode(overrides?: CallOverrides): Promise<string>;

  greet(overrides?: CallOverrides): Promise<string>;

  opAssembly(
    _a: BigNumberish,
    _b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setGreeting(
    _greeting: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    call(overrides?: CallOverrides): Promise<string>;

    getAbiEncodeSignature(
      param: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getAiEncodePacked(
      param: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getArray(overrides?: CallOverrides): Promise<BigNumber[]>;

    getEncode(overrides?: CallOverrides): Promise<string>;

    greet(overrides?: CallOverrides): Promise<string>;

    opAssembly(
      _a: BigNumberish,
      _b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setGreeting(_greeting: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    call(overrides?: CallOverrides): Promise<BigNumber>;

    getAbiEncodeSignature(
      param: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAiEncodePacked(
      param: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getArray(overrides?: CallOverrides): Promise<BigNumber>;

    getEncode(overrides?: CallOverrides): Promise<BigNumber>;

    greet(overrides?: CallOverrides): Promise<BigNumber>;

    opAssembly(
      _a: BigNumberish,
      _b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setGreeting(
      _greeting: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    call(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAbiEncodeSignature(
      param: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAiEncodePacked(
      param: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getArray(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEncode(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    greet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    opAssembly(
      _a: BigNumberish,
      _b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setGreeting(
      _greeting: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
