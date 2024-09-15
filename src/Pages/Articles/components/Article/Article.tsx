import styles from './Article.module.scss';
import deleteIcon from '../../../../assets/icons/delete.svg';
import editIcon from '../../../../assets/icons/edit.svg';
import linkIcon from '../../../../assets/icons/link.svg';
import IArticle from '../../../../interfaces/IArticle';

interface IProps {
  article: IArticle;
  handleDeleteCallback: (id: number) => void;
  handleEditCallback: (article: IArticle) => void;
  handleOpenModal: (article: IArticle) => void;
}

const Article = ({
  article,
  handleDeleteCallback,
  handleEditCallback,
  handleOpenModal,
}: IProps) => {
  const onClickModal = () => {
    handleOpenModal(article);
  };

  const handleDelete = (event: React.MouseEvent<HTMLImageElement>) => {
    handleDeleteCallback(article.id);
    event.stopPropagation();
  };

  const handleEdit = (event: React.MouseEvent<HTMLImageElement>) => {
    handleEditCallback(article);
    event.stopPropagation();
  };

  return (
    <div className={styles.article} onClick={() => onClickModal()}>
      <div className={styles.logoWrapper}>
        <img src={article.logoUrl} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.theme}>{article.title}</h2>
        <div className={styles.btnsAndAuthor}>
          <div className={styles.authorWrapper}>
            <span className={styles.author}>{article.author}</span>
          </div>
          <div className={styles.btnsAndLink}>
            <div className={styles.btns}>
              <img
                src={deleteIcon}
                alt="delete"
                className={styles.delete}
                onClick={(event) => handleDelete(event)}
              />
              <img
                src={editIcon}
                alt="edit"
                className={styles.edit}
                onClick={(event) => handleEdit(event)}
              />
            </div>
            <a
              href={article.url}
              className={styles.link}
              onClick={(event) => event.stopPropagation()}
            >
              <img src={linkIcon} alt="link" className={styles.linkIcon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
