import React from 'react';
import mui, {AppBar, FlatButton} from 'material-ui';

let ThemeManager = new mui.Styles.ThemeManager();

class App extends React.Component {
    static childContextTypes = {
        muiTheme: React.PropTypes.object
    }

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    }

    render() {
        return (
            <div>
                <AppBar showMenuIconButton={false} 
                        title="CRED Todo" />
                <div style={{padding: '20px'}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
