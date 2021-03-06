import * as React from 'react';

interface DetailLayoutProps {
  leftComponent?: () => JSX.Element;
  rightComponent?: () => JSX.Element;
  headerComponent?: () => JSX.Element;
}

class DetailLayout extends React.Component<DetailLayoutProps, {}> {
  constructor() {
    super();
  }
  
  render() {
    const headerComponent = 
      this.props.headerComponent ? (
        this.props.headerComponent()
      ) : null;
        
    const leftComponent = 
      this.props.leftComponent ? (
        this.props.leftComponent()
      ) : null;

    const rightComponent = 
      this.props.rightComponent ? (
        this.props.rightComponent()
      ) : null;

    const leftSize = (leftComponent && rightComponent) ? 
      'ten' : 'sixteen';

    const rightSize = (leftComponent && rightComponent) ? 
      'six' : 'zero';

    const header = 
      this.props.headerComponent ? (
        <div className="ui segment">
          {headerComponent}
        </div>
      ) : null;

    return (
      <div className="ui segments" style={{height: '100%'}}>
        {header}
        <div className="main ui segment">
          <div className="ui grid">
            <div className={leftSize + ' wide column'}>
              <div className="container">
                {leftComponent}
              </div>
            </div>
            <div className={rightSize + ' wide column'}>
              <div className="container">
                {rightComponent}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { 
  DetailLayoutProps,
  DetailLayout 
};
