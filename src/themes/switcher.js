export const switcher = {
  styles: `
      .title {
        margin-right: 10px;
      }
      label {
        position: relative;
        display: inline-block;
        width: 52px;
        height: 26px;
        vertical-align: middle;
        margin-right: 10px;
      }

      label .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          -webkit-transition: 0.4s;
          transition: 0.4s;
      }
  
      label .slider:before {
          position: absolute;
          content: '';
          height: 20px;
          width: 20px;
          left: 4px;
          bottom: 3px;
          background-color: white;
          -webkit-transition: 0.4s;
          transition: 0.4s;
      }
  
      label[data-value='true'] .slider {
          background-color: secondary;
      }
      
      label[data-value='false'] .slider {
          background-color: gray_border_active;
      }
  
      label[data-value='true'] .slider:before {
          -webkit-transform: translateX(25px);
          -ms-transform: translateX(25px);
          transform: translateX(25px);
      }
  
      label .slider.round {
          border-radius: 26px;
      }
  
      label .slider.round:before {
          border-radius: 50%;
      }
  `
}