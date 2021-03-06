import styled from 'styled-components/native';
import { styledThemeType } from 'styled-components';

export const Container = styled.View`
  margin: 10px;
  align-items: center;
  justify-content: center;
  border-bottom-color: ${(props: styledThemeType) => props.theme.colors.textOnPrimary}
`;

export const Title = styled.Text`
  color: ${(props: styledThemeType) => props.theme.colors.terciary};
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 5px;
  padding-left: 40px;
  padding-top: 5px;
  align-self: flex-start;
`;

export const Input = styled.TextInput`
  border-width: .5px;
  height: 40px;
  width: 300px;
  padding-right: 10px;
  padding-left: 10px;
  margin-bottom: 5px;
  background-color: ${(props: styledThemeType) => props.theme.colors.secondary};
  border-radius: 12px;
  color: ${(props: styledThemeType) => props.theme.colors.textOnSecondary};
`;