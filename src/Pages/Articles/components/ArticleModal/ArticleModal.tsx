import IArticle from '../../../../interfaces/IArticle';
import styles from './ArticleModal.module.scss';
import linkIcon from '../../../../assets/icons/link.svg';

interface IProps {
  article: IArticle;
  handleCloseModal: () => void;
}

const ArticleModal = ({ article, handleCloseModal }: IProps) => {
  return (
    <div className={styles.wrapper} onClick={handleCloseModal}>
      <div
        className={styles.articleModal}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.logoWrapper}>
          <img src={article.logoUrl} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.theme}>{article.title}</h2>
          <div className={styles.LinkAndAuthor}>
            <span className={styles.author}>{article.author}</span>
            <a href={article.url} className={styles.link}>
              <img src={linkIcon} alt="link" className={styles.linkIcon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleModal;
