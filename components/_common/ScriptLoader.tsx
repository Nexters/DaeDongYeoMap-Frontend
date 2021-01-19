import React, { ReactElement } from 'react';

type Props = {
  src: string;
  children: ({ isScriptLoaded: boolean }) => ReactElement;
};

type State = {
  isLoaded: boolean;
};

class ScriptLoader extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isLoaded: this.checkScript() };
  }

  public componentDidMount(): void {
    if (this.state.isLoaded) {
      return;
    }

    this.loadScript().then(() => {
      this.setState({ isLoaded: true });
    });
  }

  public render(): JSX.Element {
    return <>{this.props.children({ isScriptLoaded: this.state.isLoaded })}</>;
  }

  private loadScript(): Promise<void> {
    const script = document.createElement('script');

    return new Promise((resolve) => {
      script.async = true;
      script.src = this.props.src;
      script.onload = () => resolve();
      document.head.appendChild(script);
    });
  }

  private checkScript(): boolean {
    return !!document.head.querySelector(`script[src="${this.props.src}"]`);
  }
}

export default ScriptLoader;
