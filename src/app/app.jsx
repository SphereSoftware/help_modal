import React, { PureComponent } from 'react';
import LaunchBtn from './components/launchBtn/LaunchBtn';
import Select, { Option } from 'rc-select';
import 'rc-select/assets/index.css';
import Dropzone from 'react-dropzone';
import axios from 'utils/axios';
import css from './style.css';

const UploadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className={ css.icon } viewBox="0 0 512 512">
    <path fill="currentColor" d="M467.786 352.977c-11.423 0-20.682 9.26-20.682 20.682v70.594c0 14.547-11.835 26.38-26.38 26.38H91.277c-14.547 0-26.38-11.834-26.38-26.38V373.66c0-11.424-9.26-20.683-20.683-20.683-11.422 0-20.682 9.26-20.682 20.682v70.594C23.533 481.61 53.923 512 91.28 512h329.444c37.356 0 67.746-30.39 67.746-67.746V373.66c-.002-11.424-9.26-20.683-20.684-20.683zM364.753 100.186L270.626 6.06c-8.077-8.077-21.172-8.078-29.25 0l-94.126 94.126c-8.077 8.076-8.077 21.17 0 29.248 8.076 8.077 21.172 8.077 29.248 0L256 49.932l79.503 79.502c4.038 4.038 9.332 6.058 14.625 6.058 5.293 0 10.586-2.02 14.626-6.057 8.075-8.077 8.075-21.172 0-29.25z" />
    <path fill="currentColor" d="M256 0c-11.423 0-20.682 9.26-20.682 20.682v329.445c0 11.423 9.26 20.682 20.682 20.682 11.423 0 20.682-9.26 20.682-20.683V20.682C276.682 9.26 267.422 0 256 0z" />
  </svg>
);

const FileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className={ css.icon } viewBox="0 0 507.368 507.368">
    <path fill="currentColor" d="M425.402 312.573L223.138 110.31c-33.658-33.595-75.928-36.424-105.327-7.025-29.398 29.367-26.6 71.7 6.993 105.327l181.923 181.923c6.198 6.166 16.304 6.166 22.47 0 6.198-6.198 6.198-16.304 0-22.47L147.273 186.142c-16.304-16.304-26.697-40.713-7.024-60.387 19.64-19.673 44.08-9.25 60.386 7.056l202.232 202.233c58.035 58.098 72.496 84.86 37.917 119.44-34.993 34.928-72.05 26.25-127.797-29.495L88.285 200.19C51.99 163.894 26.565 104.62 74.27 56.946 130.904.31 195.582 55.993 214.016 74.458l206.46 206.523c6.165 6.2 16.272 6.2 22.47 0 6.165-6.197 6.165-16.272 0-22.5L236.486 51.987c-62.42-62.42-133.2-69.095-184.72-17.512C-.293 86.504 5.333 162.146 65.815 222.66L290.55 447.362c19.1 19.165 60.004 60.005 107.042 60.005 21.104 0 43.51-8.263 65.726-30.48 63.152-63.182 4.736-121.694-37.916-164.314z" />
  </svg>
);

const RemoveIcon = props => (
  <svg xmlns="http://www.w3.org/2000/svg" className={ css.removeIcon } { ...props } viewBox="0 0 15.642 15.642">
    <path fill="currentColor" d="M8.882 7.82l6.54-6.54c.294-.293.294-.768 0-1.06-.292-.294-.767-.294-1.06 0l-6.54 6.54L1.28.22C.987-.073.512-.073.22.22c-.294.293-.294.768 0 1.06l6.54 6.542-6.54 6.54c-.293.293-.293.768 0 1.06.147.147.338.22.53.22s.384-.072.53-.22l6.54-6.54 6.542 6.54c.147.147.338.22.53.22s.384-.072.53-.22c.293-.292.293-.767 0-1.06l-6.54-6.54z" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className={ css.mailIcon } viewBox="0 0 512 512">
    <path fill="currentColor" d="M501.8 139.942H171.313c-5.633 0-10.2 4.566-10.2 10.2v19.234h-97.21c-5.632 0-10.198 4.566-10.198 10.2 0 5.632 4.566 10.198 10.2 10.198h97.21v132.452H103.01c-5.633 0-10.2 4.566-10.2 10.2s4.567 10.198 10.2 10.198h58.1v19.235c0 5.632 4.567 10.198 10.2 10.198h330.49c5.632 0 10.198-4.566 10.198-10.2V150.142c0-5.632-4.566-10.198-10.2-10.198zm-25.16 20.398L336.57 275.325 197.14 160.34h279.5zm14.962 191.32h-310.09V173.89L330.068 296.4c1.884 1.554 4.186 2.332 6.49 2.332 2.294 0 4.59-.772 6.47-2.316L491.602 174.45v177.21z" />
    <path fill="currentColor" d="M119.673 244.768H10.2c-5.634 0-10.2 4.566-10.2 10.2 0 5.632 4.566 10.198 10.2 10.198h109.473c5.633 0 10.2-4.566 10.2-10.2 0-5.632-4.567-10.198-10.2-10.198zM69.355 322.227h-5.45c-5.634 0-10.2 4.566-10.2 10.2 0 5.632 4.566 10.198 10.2 10.198h5.45c5.633 0 10.2-4.566 10.2-10.2 0-5.632-4.567-10.198-10.2-10.198z" />
  </svg>
);

const CATEGORIES = ['Question', "It doesn't work", 'Subscription and billing', 'Other'];

const NEED_EMAIL = process.env.TARGET !== 'app';

const CLOSE_TIME = 5000;

const initialState = {
    open: false,
    isSent: false,
    email: '',
    category: 0,
    message: '',
    files: [],
    needEmailInput: false
};

export default class App extends PureComponent {

  state = initialState;

  componentDidMount() {
    window.sphereHelpModal = {
      isOpened: () => this.state.open,
      toggle: this.toggle,
      clearFields: this.clearFields
    };
  }

  closeTimeout = null;

  get email() {
    return localStorage.getItem('email') || '';
  }

  setCloseTimeout = () => setTimeout(() => {
    this.toggle();
    this.closeTimeout = null;
  }, CLOSE_TIME);

  clearFields = () => {
    const needEmailInput = NEED_EMAIL || !this.email.length;
    this.setState({ ...initialState, open: this.state.open, needEmailInput });
  };

  toggle = () => {
    const needEmailInput = NEED_EMAIL || !this.email.length;

    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
    }

    this.setState({ open: !this.state.open, isSent: false, email: this.email, needEmailInput });
  };

  onEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  onCategoryChange = (value) => {
    this.setState({ category: value });
  };

  onMessageChange = (e) => {
    this.setState({ message: e.target.value });
  };

  onDrop = (files) =>  {
    this.setState({ files: this.state.files.concat(files) });
  };

  removeFile(i) {
    this.setState({ files: this.state.files.filter((_, index) => index !== i) });
  }

  renderFilesList() {
    return this.state.files.map((file, i) => (
      <div key={ `${file.name}-${i}` } className={ css.file }>
        <FileIcon />
        <div className={ css.fileName }>
          { file.name }
        </div>
        <RemoveIcon onClick={ () => this.removeFile(i) } />
      </div>
    ));
  }

  send = (e) => {
    const { email, category, message, files } = this.state;
    const data = new FormData();

    e.preventDefault();

    data.append('email', email);
    data.append('category', CATEGORIES[category]);
    data.append('message', message);
    files.forEach(file => data.append('files[]', file, file.name));

    axios.post('', data)
      .then(() => {
        this.clearFields();
        this.setState({ isSent: true });
      });
  };

  renderBox() {
    const { isSent, category, message, email, needEmailInput } = this.state;

    if (isSent) {
      this.closeTimeout = this.setCloseTimeout();
      return (
        <div>
          <div className={ `${css.box} ${css.sentMessage}` }>
            <MailIcon />
            <p className={ css.thankYouText }>
              Thank you for your feedback! We appreciate it very much.<br />
              Our manager will contact you within 24 hours.
            </p>
          </div>
          <div className={ css.triangle } />
        </div>
      );
    }

    return (
      <form onSubmit={ this.send }>
        <div className={ css.box }>
          <div className={ css.header }>Need our help?</div>
          <div className={ css.info }>Please, select category that looks appropriate for your type of question and describe what you want to ask. Our manager will contact you within 24 hours ready to talk and help</div>
          { needEmailInput &&
            <input
              type="email"
              className={ `${css.input} ${css.inputField}` }
              value={ email }
              onChange={ this.onEmailChange }
              placeholder="Type your Email"
              required
            />
          }
          <Select
            value={ category }
            className={ css.select }
            style={ { width: '100%' } }
            optionLabelProp="children"
            onChange={ this.onCategoryChange }
          >
            { CATEGORIES.map((cat, i) => <Option key={ i } value={ i }>{ cat }</Option>) }
          </Select>

          <textarea
            className={ `${css.input} ${css.textArea}` }
            value={ message }
            rows="8"
            onChange={ this.onMessageChange }
            placeholder="Type your message"
            maxLength="1000"
            required
          />

          { this.renderFilesList() }

          <Dropzone className={ css.dropzone } onDrop={ this.onDrop }>
            <UploadIcon />
            Add file
          </Dropzone>

          <button type="submit" className={ css.btn }>Send message</button>
        </div>
        <div className={ css.triangle } />
      </form>
    );
  }

  render() {
    const { open } = this.state;
    return (
      <div className={ css.container }>
        { open && this.renderBox() }
        <LaunchBtn open={ open } onClick={ this.toggle } />
      </div>
    );
  }
}
