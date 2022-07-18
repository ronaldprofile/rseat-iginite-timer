import styled from 'styled-components'

export type VariantButton = 'primary' | 'secondary' | 'success' | 'danger'

interface ButtonContainerProps {
  variant: VariantButton
}

export const ButtonContainer = styled.button<ButtonContainerProps>``
