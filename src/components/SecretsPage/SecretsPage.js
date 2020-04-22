import React, {Component} from 'react';
import { connect } from 'react-redux';

class SecretsPage extends Component {
  componentDidMount() {
    this.props.dispatch({type: 'FETCH_SECRETS'});
  }

  render() {
    return (
      <div>
        <p>Currently logged in as <b>{this.props.user.username}</b></p>
        <p>Clearance level: <b>{this.props.user.clearance_level}</b></p>
        <ul>
          {this.props.secrets.map(secret => (
            <li>
              Clearance: {secret.secrecy_level} | Content: {secret.content}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  secrets: state.secrets,
  user: state.user,
});

export default connect(mapStateToProps)(SecretsPage);
