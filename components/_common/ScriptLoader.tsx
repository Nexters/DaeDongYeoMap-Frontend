import React, { ReactElement } from 'react';

type Props = {
  src: string;
  blocker: () => Promise<void>;
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
    const loadScript: Promise<void> = new Promise((resolve) => {
      script.src = this.props.src;
      script.onload = () => resolve();
      document.head.appendChild(script);
    });

    return this.props.blocker
      ? loadScript.then(() => this.props.blocker())
      : loadScript;
  }

  private checkScript(): boolean {
    return !!document.head.querySelector(`script[src="${this.props.src}"]`);
  }
}

export default ScriptLoader;
