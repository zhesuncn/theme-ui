export const notification = {
  close_icon: 'close',
  styles: `
    border: 1px solid primary;
    border-radius: 5px;
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;
    img {
      cursor: pointer;
      outline: none;
      width: 12px;
    }
    &.info{
      border-color: secondary;
      color: secondary;
    }
    &.error{
      border-color: error;
      color: error;
    }
  `
}