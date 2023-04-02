import './ResultCard.scss';
import { BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { MdPhone, MdOutlineAlternateEmail } from 'react-icons/md';

interface Props {
  /**
   * It selects which background should apply to background of this element
   * @defaultValue `false`
   */
  isDark?: boolean;
  person: {
    name: string;
    phone: string;
    email: string;
    policyId: string;
  };
}

function ResultCard({ isDark = false, person }: Props) {
  return (
    <article className={`resultCard__wrapper ${isDark ? 'dark' : 'light'}`}>
      <a href="/profile/userId">
        <h2>{person.name}</h2>
      </a>
      <section className="resultCard__userInfo">
        <a
          href={`tel:${person.phone}`}
          className="resultCard__userInfo__phoneNumber"
        >
          <MdPhone fontSize={16} />
          <span>{person.phone}</span>
        </a>
        <a
          href={`mailto:${person.email}`}
          className="resultCard__userInfo__email"
        >
          <MdOutlineAlternateEmail fontSize={16} />
          <span>{person.email}</span>
        </a>
        <a
          href="/policy/fileNo"
          className="resultCard__userInfo__fileNumber"
        >
          <BsFillFileEarmarkTextFill fontSize={16} />
          <span>Policy No. {person.policyId}</span>
        </a>
      </section>
    </article>
  );
}
export default ResultCard;
