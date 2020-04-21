import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #FFFFFF;
`;

export const TodoInput = styled.TextInput.attrs({
    placeholder: 'Insert ToDo'
})`
    background-color: #FFFFFF;
    border-width: 2px;
    border-color: #141414;
    border-radius: 25px;
    margin: 10px 10px 10px 10px;
    padding-left: 10px;
`

export const Send = styled.TouchableOpacity.attrs({
    activeOpacity: 0.5,
})`
    justify-content: center;
    background-color: #393f8f;
    margin: 0px 20px 0px 20px;
    min-height: 30px;
    border-radius: 25px;
`

export const ButtonText = styled.Text`
    color: #FFFFFF;
    text-align: center;
`