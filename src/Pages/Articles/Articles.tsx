import styles from './Articles.module.scss';
import articlesData from '../../assets/data/Articles.json';
import { useState } from 'react';
import Article from './components/Article/Article';
import ArticleModal from './components/ArticleModal/ArticleModal';
import IArticle from '../../interfaces/IArticle';
import EditArticleModal from './components/EditArticleModal/EditArticleModal';
import CreateArticleModal from './components/CreateArticleModal/CreateArticleModal';
import { Alert, Grid2, Snackbar } from '@mui/material';

const Articles = () => {
  const [articles, setArticles] = useState(articlesData);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalData, setModalData] = useState<IArticle | null>(null);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const [snackOpen, setSnackOpen] = useState(false);

  const handleDelete = (id: number) => {
    const updatedArticles = articles.filter((article) => article.id !== id);

    setSnackOpen(true);

    setArticles(updatedArticles);
  };

  const handleEdit = (article: IArticle) => {
    setModalData(article);
    setIsEditModalOpen(true);
  };

  const handleSubmitEdit = (updatedArticle: IArticle) => {
    const updatedArticles = articles.map((article) => {
      if (article.id === updatedArticle.id) {
        return updatedArticle;
      }
      return article;
    });

    setArticles(updatedArticles);
    setIsEditModalOpen(false);
  };

  const handleCancelEdit = () => {
    setIsEditModalOpen(false);
  };

  const handleSubmitCreate = (article: IArticle) => {
    const newArticle = { ...article, id: articles[articles.length - 1].id + 1 };
    setArticles([...articles, newArticle]);
    setIsCreateModalOpen(false);
  };

  const handleCancelCreate = () => {
    setIsCreateModalOpen(false);
  };

  const handleOpenModal = (article: IArticle) => {
    setModalData(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  const handleCreateArticle = () => {
    setIsCreateModalOpen(true);
  };

  return (
    <div className={styles.articles}>
      <button className={styles.newArticleBtn} onClick={handleCreateArticle}>
        New Article
      </button>
      <Grid2
        container
        spacing={{ xs: 2, md: 4 }}
        sx={{ p: { md: 6, sm: 3, xs: 2 } }}
      >
        {isModalOpen && (
          <ArticleModal
            article={modalData!}
            handleCloseModal={handleCloseModal}
          />
        )}

        {isEditModalOpen && (
          <EditArticleModal
            article={modalData!}
            handleSubmitEdit={handleSubmitEdit}
            handleCancelEdit={handleCancelEdit}
          />
        )}

        {isCreateModalOpen && (
          <CreateArticleModal
            handleSubmitCreate={handleSubmitCreate}
            handleCancelCreate={handleCancelCreate}
          />
        )}

        {articles.map((article) => (
          <Article
            article={article}
            handleDeleteCallback={handleDelete}
            handleEditCallback={handleEdit}
            handleOpenModal={handleOpenModal}
            key={article.id}
          />
        ))}

        <Snackbar
          open={snackOpen}
          autoHideDuration={3000}
          onClose={() => setSnackOpen(false)}
        >
          <Alert
            severity="success"
            variant="outlined"
            sx={{display: 'flex', alignItems: 'center', fontSize: '1.5rem'}}
          >
            Successfully removed
          </Alert>
        </Snackbar> 
      </Grid2>
    </div>
  );
};

export default Articles;
