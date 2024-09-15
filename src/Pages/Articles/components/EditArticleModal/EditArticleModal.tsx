import { useState } from 'react';
import IArticle from '../../../../interfaces/IArticle';
import styles from './EditArticleModal.module.scss';
import cancelIcon from '../../../../assets/icons/cancel.svg';
import confirmIcon from '../../../../assets/icons/confirm.svg';

interface IProps {
  article: IArticle;
  handleSubmitEdit: (updatedArticle: IArticle) => void;
  handleCancelEdit: () => void;
}

const EditArticleModal = ({
  article,
  handleSubmitEdit,
  handleCancelEdit,
}: IProps) => {
  const [formState, setFormState] = useState({
    title: article.title,
    author: article.author,
    url: article.url,
    logoUrl: article.logoUrl,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLFormElement, MouseEvent>,
  ) => {
    event.preventDefault();

    handleSubmitEdit({
      ...formState,
      id: article.id,
    });
  };

  return (
    <div className={styles.wrapper} onClick={handleCancelEdit}>
      <div
        className={styles.editModal}
        onClick={(event) => event.stopPropagation()}
      >
        <form onSubmit={handleSubmit} action="" className={styles.form}>
          <div className={styles.formFieldWrapper}>
            <p className={styles.formTitle}>Title</p>
            <input
              type="text"
              name="title"
              className={styles.formField}
              value={formState.title}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formFieldWrapper}>
            <p className={styles.formTitle}>Author</p>
            <input
              type="text"
              name="author"
              className={styles.formField}
              value={formState.author}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formFieldWrapper}>
            <p className={styles.formTitle}>Url</p>
            <input
              type="text"
              name="url"
              className={styles.formField}
              value={formState.url}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formFieldWrapper}>
            <p className={styles.formTitle}>Logo url</p>
            <input
              type="text"
              name="logoUrl"
              className={styles.formField}
              value={formState.logoUrl}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.btns}>
            <button
              type="button"
              className={styles.btn}
              onClick={handleCancelEdit}
            >
              <img
                src={cancelIcon}
                alt="cancel"
                className={styles.cancelIcon}
              />
            </button>
            <button type="submit" className={styles.btn}>
              <img
                src={confirmIcon}
                alt="confirm"
                className={styles.confirmIcon}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditArticleModal;
