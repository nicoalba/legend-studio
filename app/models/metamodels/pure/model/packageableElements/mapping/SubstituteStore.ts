/**
 * Copyright 2020 Goldman Sachs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { observable } from 'mobx';
import { Store } from 'MM/model/packageableElements/store/Store';
import { PackageableElementReference } from 'MM/model/packageableElements/PackageableElementReference';
import { MappingInclude } from './MappingInclude';

export class SubstituteStore {
  @observable owner: MappingInclude;
  @observable original: PackageableElementReference<Store>;
  @observable substitute: PackageableElementReference<Store>;

  constructor(owner: MappingInclude, original: PackageableElementReference<Store>, substitue: PackageableElementReference<Store>) {
    this.owner = owner;
    this.original = original;
    this.substitute = substitue;
  }
}