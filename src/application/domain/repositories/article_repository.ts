import Article from "../entities/article";

export default interface ArticleRepository {
  getArticles(): Article[];
}

export default class ArticleRepositoryImpl implements ArticleRepository {
    getArticles(): Article[] {
      let article: Article[] = [];
            
      return article;
    }
  }
