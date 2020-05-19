import styled from 'styled-components'

export const editable = {
  confirm_icon: 'check',
  cancel_icon: 'close',
  edit_icon: 'edit',
  delete_icon: 'trash',
  container: styled.div`
   .btns {
      display: inline-flex;
    }
    .btns svg, .btns img{
      margin-right: 10px;
      width: 16px;
    }
  `
}

export const editableInput = {
  confirm_icon: 'check',
  cancel_icon: 'close',
  edit_icon: 'edit',
  delete_icon: 'trash',
  container: styled.div`
    display: flex;
    align-items: center;
    .btns{
      display: flex;
      align-items: center;
    }
    svg, img{
      margin-right: 10px;
      width: 16px;
      cursor: pointer;
    }
  `,
  edition: {
    container: styled.div`
    display: flex;
    align-items: center;
  `
  }
}
