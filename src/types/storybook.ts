import type { ArgType as BaseArgType, StoryContext } from '@storybook/addons';
import { Args as DefaultArgs, Annotations, BaseStory as BaseBaseStory } from '@storybook/addons';
import { Component } from '@vue/runtime-core';

type BaseStory<Args = DefaultArgs> = BaseBaseStory<Args, void> & Annotations<Args, void>;

export interface Story<Args>
  extends Annotation<Args>,
    Omit<BaseStory<Args>, 'argTypes'> {
  (args: Args, context: StoryContext): Component | Component[];
}

interface Annotation<Args> {
  argTypes?: ArgTypes<Args>;
}

type ArgTypes<Props> = {
  [key in keyof Props]?: ArgType<Props[key]>;
};

interface ArgType<T> extends BaseArgType {
  control?: Control<T> | Control<T>['type'] | Disable;
  defaultValue?: T;
  table?: Table;
  [key: string]: unknown;
}

type Control<T> =
  | ControlArray
  | ControlBare
  | ControlColor
  | ControlEnum<T>
  | ControlNumber;

interface ControlBare {
  type: 'boolean' | 'object' | 'text' | 'date';
}

interface ControlArray {
  type: 'array';
  separator?: string;
}

interface ControlColor {
  type: 'color';
  presetColors?: string[];
}

interface ControlEnum<Option> {
  type:
    | 'radio'
    | 'inline-radio'
    | 'check'
    | 'inline-check'
    | 'select'
    | 'multi-select';
  options: readonly Option[];
}

interface ControlNumber {
  type: 'number' | 'range';
  min?: number;
  max?: number;
  step?: number;
}

interface Table extends Disable {
  defaultValue?: Row;
  type?: Row;
}

interface Row {
  detail?: string;
  summary?: string;
}

interface Disable {
  disable?: boolean;
}