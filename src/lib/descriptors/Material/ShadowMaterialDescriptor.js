import * as THREE from 'three';

import PropTypes from 'react/lib/ReactPropTypes';

import MaterialDescriptorBase from './MaterialDescriptorBase';

class ShadowMaterialDescriptor extends MaterialDescriptorBase {
  constructor(react3RendererInstance) {
    super(react3RendererInstance);

    this.hasProp('rotation', {
      type: PropTypes.number,
      simple: true,
      default: 0,
    });

    this.hasProp('isShadowMaterial', {
      type: PropTypes.bool,
      simple: true,
      default: true,
    });

    this.hasProp('lights', {
      type: PropTypes.bool,
      simple: true,
      default: true,
    });
  }

  construct(props) {
    const materialDescription = this.getMaterialDescription(props);

    return new THREE.ShadowMaterial(materialDescription);
  }
}

module.exports = ShadowMaterialDescriptor;
