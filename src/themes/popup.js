import styled from 'styled-components'

export const popup = {
  style: {
    overlay: {
      zIndex: 100,
      backgroundColor: 'rgba(63,63,63,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    content: {
      minWidth: '500px',
      maxHeight: '80%',
      overflowY: 'auto',
      zIndex: 100,
      background: '#FFFFFF'
    }
  }
}
export const prompt = {
  container: styled.div`
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    > textarea {
      margin-top: 10px;
    }
  `
}
