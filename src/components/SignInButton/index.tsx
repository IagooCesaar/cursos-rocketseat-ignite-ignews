import { FaGithub } from 'react-icons/fa'
import styles from './styles.module.scss';

export function SignInButton() {
  return (
    <button type="button">
      <FaGithub />
      Sign in with Github
    </button>
  )
}