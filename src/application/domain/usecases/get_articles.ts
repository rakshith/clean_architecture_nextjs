import Article from "../entities/article";
import ArticleRepository from "../repositories/article_repository";

export default class GetArticlesUsecase {
  repository: ArticleRepository;

  constructor(articleRepo: ArticleRepository) {
    this.repository = articleRepo;
  }

  fetchNews(): Article[] {
    return this.repository.getArticles();
  }
}
