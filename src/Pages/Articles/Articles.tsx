import styles from './Articles.module.scss';
import articlesData from '../../assets/data/Articles.json';
import { useState } from 'react';
import Article from './components/Article/Article';
import ArticleModal from './components/ArticleModal/ArticleModal';
import IArticle from '../../interfaces/IArticle';
import EditArticleModal from './components/EditArticleModal/EditArticleModal';
import CreateArticleModal from './components/CreateArticleModal/CreateArticleModal';

const Articles = () => {
  const [articles, setArticles] = useState(articlesData);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalData, setModalData] = useState<IArticle | null>(null);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleDelete = (id: number) => {
    const updatedArticles = articles.filter((article) => article.id !== id);
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
      <div className={styles.articlesWrapper}>
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
      </div>
    </div>
  );
};

export default Articles;
