import React from 'react';

function browserOnly<TargetProps>(
  TargetComponent: React.ComponentType
): React.FC<TargetProps> {
  const BrowserOnly: React.FC = (props: TargetProps) =>
    process?.browser && <TargetComponent {...props} />;

  return BrowserOnly;
}

export default browserOnly;
