import styled from 'styled-components';
import media from 'styled-media-query';

export const Section = styled.section`
  margin-top: 3%;
  margin-bottom: 10%;
  display: flex;
  flex-wrap: wrap;
  max-width: 100vw;
  align-items: center;
  justify-content: center;

  ${media.lessThan('medium')`
        margin-top: 15%;
        margin-bottom: 15%;
    `}
`;

export const Container = styled.div`
  background-color: var(--secondary);
  width: 50%;
  max-width: 800px;
  height: 50%;
  padding: 36px 48px 31px;
  border-radius: 10px;

  ${media.between('medium', 'large')`
        width: 70%;
        height: 70%;
    `}

  ${media.between('small', 'medium')`
        width: 80%;
        height: 80%;
    `}

    ${media.lessThan('small')`
        width: 80%;
        padding: 20px 28px 18px;
    `}
`;

export const Title = styled.p`
  color: var(--white);
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const Form = styled.div`
  width: 100%;
  margin: 0 0 15px;
`;
export const Field = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 15px;

  ${media.lessThan('small')`
        flex-direction: column;
        align-items: flex-start;
    `}
`;
export const Label = styled.p`
  margin-bottom: 7px;
  color: var(--quaternary);
  font-size: 18px;
  font-weight: bold;
`;
export const Input = styled.input`
  width: 100%;
  background: var(--quaternary);
  height: 40px;
  display: flex;
  align-items: center;
  color: white;
  font-size: 14px;
  padding: 0 15px;
  border-radius: 40px;

  & + Input {
    margin-top: 10px;
  }

  ${media.lessThan('small')`
        width: 100%;
    `}
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 200px;
  background: var(--quaternary);
  padding: 10px 15px;
  font-size: 16px;
  color: white;
  border-radius: 20px;

  resize: vertical;
`;

export const Select = styled.div`
  display: flex;
  height: 40px;

  ${media.lessThan('small')`
        margin-bottom: 60px;
        width: 100%;
        flex-direction: column;
    `}
`;

const colorMatch = {
  category: [
    'var(--quaternary)',
    'var(--red)',
    'var(--light-purple)',
    'var(--blue)',
  ],
  level: [
    'var(--quaternary)',
    'var(--nephritis)',
    'var(--pumpkin)',
    'var(--pomegranate)',
  ],
};

export const Item = styled.button`
  width: 100%;
  padding: 5px 10px;

  text-transform: uppercase;
  color: var(--tertiary);
  font-size: 12px;
  font-weight: bold;

  cursor: pointer;

  &:first-child {
    background-color: ${(props) =>
      props.selected ? colorMatch[props.type][1] : colorMatch[props.type][0]};
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  }

  &:nth-child(2) {
    background-color: ${(props) =>
      props.selected ? colorMatch[props.type][2] : colorMatch[props.type][0]};
    border-style: none solid;
  }

  &:last-child {
    background-color: ${(props) =>
      props.selected ? colorMatch[props.type][3] : colorMatch[props.type][0]};
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }

  ${media.lessThan('small')`
        padding: 10px 0;
        &:first-child {
            border-top-right-radius: 20px;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 0;
        }
        &:nth-child(2) {
            border-style: solid none;
        }
        &:last-child {
            border-top-right-radius: 0;
            border-bottom-right-radius: 20px;
            border-bottom-left-radius: 20px;
        }
    `}
`;

export const Actions = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
  align-items: center;
  justify-content: space-around;
`;

export const Button = styled.button`
  padding: 10px 15px;
  border-radius: 40px;
  font-size: 18px;
  cursor: pointer;

  background-color: ${(props) =>
    props.type === 'submit' ? 'var(--yellow)' : 'var(--quaternary)'};
`;

export const AddLinkButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  margin-top: 10px;
  align-self: flex-end;
  padding: 0 20px;
  font-weight: bold;

  color: var(--quaternary);
`;

export const ImagePreview = styled.img`
  //width: 50px;
  height: 50px;
  border-radius: 10px;
`;

export const PreviewList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  max-width: 100%;

  li {
    width: 50px;
    margin: 10px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    position: relative;
    background-color: rgba(0, 0, 0, 0);
    color: var(--red);
    top: 25px;
    right: 15px;
    cursor: pointer;
  }
`;
