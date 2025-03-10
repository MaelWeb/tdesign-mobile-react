import React from 'react';
import { Badge } from 'tdesign-mobile-react';

import './style/index.less';

export default function Base() {
  return (
    <div className="base-demo">
      <div className="base-demo__container">
        <Badge>消息</Badge>
      </div>
      <div className="base-demo__container">
        <Badge offset={['10px', '10px']}>消息</Badge>
      </div>
      <div className="base-demo__container">
        <Badge offset={[10, 10]}>消息</Badge>
      </div>
      <div className="base-demo__container">
        <Badge offset={['-10px', '-10px']}>消息</Badge>
      </div>
    </div>
  );
}
