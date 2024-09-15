import { useState } from 'react';
import IArticle from '../../../../interfaces/IArticle';
import styles from './CreateArticleModal.module.scss';
import cancelIcon from '../../../../assets/icons/cancel.svg';
import confirmIcon from '../../../../assets/icons/confirm.svg';

interface IProps {
  handleSubmitCreate: (updatedArticle: IArticle) => void;
  handleCancelCreate: () => void;
}

const CreateArticleModal = ({
  handleSubmitCreate,
  handleCancelCreate,
}: IProps) => {
  const [formState, setFormState] = useState({
    title: '',
    author: '',
    url: '',
    logoUrl: '',
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
    console.log('Ok');

    handleSubmitCreate({
      ...formState,
      id: 0,
    });
  };

  return (
    <div className={styles.wrapper} onClick={handleCancelCreate}>
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
              onClick={handleCancelCreate}
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

export default CreateArticleModal;
