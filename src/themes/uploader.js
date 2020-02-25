export const uploader = {
  validate_icon: 'check_circle',
  add_icon: 'plus_circle',
  loading_icon: 'loading',
  delete_icon: 'trash',
  styles: `
    .input {
      height: 50px;
      background: gray_background;
      border-radius: 5px;
      padding: 0 20px;
      color: text_black;
      font-size: 14px;
      font-weight: 300;
      display: flex;
      justify-content: space-between;
      align-items: center;
      outline: none;
    }
    .btn {
      display: flex;
      align-items: center;
      font-weight: normal;
      cursor: pointer;
      outline: none;
    }
    .file_name img, .file_name svg {
      cursor: pointer;
    }
    .btn img, .btn svg {
      margin-right: 15px;
    }
    .file_name {
      height: 40px;
      background: gray_background_light;
      border-radius: 5px;
      padding: 0 20px;
      margin: 0 10px;
      color: text_black;
      font-size: 14px;
      font-weight: normal;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

  `
}