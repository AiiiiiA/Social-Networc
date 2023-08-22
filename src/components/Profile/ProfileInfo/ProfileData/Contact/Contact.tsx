import { FC, ReactNode } from 'react'

const Contact: FC<ContactProps> = ({ contactTitle, contactValue }) => (
    <div>
        {contactValue
            ? <div>
                {contactTitle}: {contactValue}
            </div>
            : null}
    </div>
)


export default Contact

type ContactProps = {
    contactTitle: string,
    contactValue: ReactNode
}