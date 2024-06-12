import { TitleLabel, OptionalLabel } from './styles'

export default function Title({ title }) {
    return (
        <div>
            <TitleLabel>
                {title}
                <OptionalLabel>(optional)</OptionalLabel>
            </TitleLabel>
        </div>
    )
}