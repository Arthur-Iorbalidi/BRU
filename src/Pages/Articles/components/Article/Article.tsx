import styles from './Article.module.scss';
import deleteIcon from '../../../../assets/icons/delete.svg';
import editIcon from '../../../../assets/icons/edit.svg';
import linkIcon from '../../../../assets/icons/link.svg';
import IArticle from '../../../../interfaces/IArticle';
import { Card, CardMedia, Grid2, IconButton, Tooltip } from '@mui/material';

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

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    handleDeleteCallback(article.id);
    event.stopPropagation();
  };

  const handleEdit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    handleEditCallback(article);
    event.stopPropagation();
  };

  return (
    <Grid2 size={{ md: 4, sm: 6, xs: 12 }}>
      <Card
        className={styles.article}
        sx={{ bgcolor: 'transparent', borderRadius: '18px' }}
        onClick={() => onClickModal()}
      >
        <div className={styles.logoWrapper}>
          <CardMedia
            component="img"
            image={article.logoUrl}
            alt="logo"
            className={styles.logo}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.theme}>{article.title}</h2>
          <div className={styles.btnsAndAuthor}>
            <div className={styles.authorWrapper}>
              <span className={styles.author}>{article.author}</span>
            </div>
            <div className={styles.btnsAndLink}>
              <div className={styles.btns}>
                <Tooltip title="delete">
                  <IconButton size="small" onClick={(event) => handleDelete(event)}>
                    <img
                      src={deleteIcon}
                      alt="delete"
                      className={styles.delete}
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip title="edit">
                  <IconButton size="small"  onClick={(event) => handleEdit(event)}>
                    <img
                      src={editIcon}
                      alt="edit"
                      className={styles.edit}
                    />
                  </IconButton>
                </Tooltip>
              </div>
              <Tooltip title="go to" sx={{ fontSize: 14 }}>
                <IconButton size="small" onClick={(event) => event.stopPropagation()}>
                  <a
                    href={article.url}
                    className={styles.link}
                  >
                    <img
                      src={linkIcon}
                      alt="link"
                      className={styles.linkIcon}
                    />
                  </a>
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>
      </Card>
    </Grid2>
  );
};

export default Article;
