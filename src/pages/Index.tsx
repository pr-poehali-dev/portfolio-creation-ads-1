import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const articles = [
    {
      id: 1,
      category: 'Стратегии',
      readTime: '5 мин чтения',
      title: '10 ошибок в Яндекс.Директ',
      description: 'Разбираем типичные ошибки при настройке контекстной рекламы и способы их избежать',
      content: [
        { type: 'paragraph', text: 'Контекстная реклама в Яндекс.Директ — мощный инструмент для привлечения клиентов. Однако даже опытные маркетологи допускают ошибки, которые приводят к слиянию бюджета и низкой эффективности кампаний.' },
        { type: 'heading', text: '1. Отсутствие минус-слов' },
        { type: 'paragraph', text: 'Одна из самых критичных ошибок. Без минус-слов ваши объявления показываются по нерелевантным запросам, что приводит к пустым тратам бюджета. Обязательно собирайте минус-слова до запуска и регулярно пополняйте список в процессе ведения кампании.' },
        { type: 'heading', text: '2. Неправильная структура кампаний' },
        { type: 'paragraph', text: 'Многие новички создают одну кампанию на все товары или услуги. Правильный подход — разделение по типам товаров, регионам и целевым аудиториям. Это позволяет точнее управлять бюджетами и ставками.' },
        { type: 'heading', text: '3. Игнорирование качества объявлений' },
        { type: 'paragraph', text: 'Показатель качества напрямую влияет на стоимость клика. Используйте ключевые слова в заголовках, добавляйте расширения, пишите уникальные тексты для каждой группы объявлений.' },
        { type: 'heading', text: '4. Отсутствие UTM-меток' },
        { type: 'paragraph', text: 'Без меток невозможно корректно отслеживать эффективность в Яндекс.Метрике. Настраивайте автоматическую простановку меток или создавайте их вручную для каждой кампании.' },
        { type: 'heading', text: '5. Неоптимальные ставки' },
        { type: 'paragraph', text: 'Слишком низкие ставки — нет показов, слишком высокие — сливается бюджет. Используйте автоматические стратегии или анализируйте аукцион, чтобы найти баланс между показами и стоимостью.' }
      ]
    },
    {
      id: 2,
      category: 'Оптимизация',
      readTime: '7 мин чтения',
      title: 'Как снизить цену клика на 40%',
      description: 'Практическое руководство по оптимизации ставок и повышению качества объявлений',
      content: [
        { type: 'paragraph', text: 'Снижение цены клика — одна из главных задач при оптимизации рекламных кампаний. В этой статье разберу проверенные способы, которые помогли моим клиентам снизить CPC на 30-50%.' },
        { type: 'heading', text: 'Повышение показателя качества' },
        { type: 'paragraph', text: 'Чем выше показатель качества, тем дешевле обходится клик. Для его повышения: добавьте ключевые слова в заголовки, улучшите релевантность посадочной страницы, используйте быстрые ссылки и уточнения.' },
        { type: 'heading', text: 'Работа с минус-словами' },
        { type: 'paragraph', text: 'Регулярно анализируйте поисковые запросы и добавляйте нерелевантные в минус-слова. Это отсечет нецелевой трафик и автоматически снизит среднюю стоимость клика.' },
        { type: 'heading', text: 'Корректировки ставок' },
        { type: 'paragraph', text: 'Используйте корректировки по времени, устройствам и регионам. Снижайте ставки в неконверсионные часы и повышайте в пиковое время. Анализируйте статистику по устройствам — возможно, на мобильных конверсия выше.' },
        { type: 'heading', text: 'Автоматические стратегии' },
        { type: 'paragraph', text: 'После накопления статистики переходите на автоматические стратегии. «Оптимизация кликов» или «Недельный бюджет» помогут снизить среднюю стоимость клика, сохраняя объем трафика.' },
        { type: 'heading', text: 'A/B тестирование объявлений' },
        { type: 'paragraph', text: 'Создавайте минимум 2-3 объявления в каждой группе. Тестируйте разные заголовки, тексты, призывы к действию. Более кликабельные объявления получают более высокий CTR, что снижает цену клика.' }
      ]
    },
    {
      id: 3,
      category: 'Аналитика',
      readTime: '6 мин чтения',
      title: 'Настройка целей в Метрике',
      description: 'Пошаговая инструкция по настройке конверсий и отслеживанию эффективности рекламы',
      content: [
        { type: 'paragraph', text: 'Правильная настройка целей в Яндекс.Метрике — фундамент эффективной работы с рекламой. Без четкого отслеживания конверсий невозможно оценить реальную отдачу от вложений.' },
        { type: 'heading', text: 'Типы целей в Метрике' },
        { type: 'paragraph', text: 'Яндекс.Метрика поддерживает несколько типов целей: посещение страницы, количество просмотров, JavaScript-событие, составная цель. Для большинства бизнесов достаточно первых двух типов.' },
        { type: 'heading', text: 'Настройка цели «Посещение страницы»' },
        { type: 'paragraph', text: 'Это самый простой тип цели. Используется для отслеживания посещения страницы благодарности после заявки или покупки. Укажите URL страницы или часть URL, добавьте название цели и сохраните.' },
        { type: 'heading', text: 'Составные цели для сложных воронок' },
        { type: 'paragraph', text: 'Если у вас многоэтапная воронка (например, добавление в корзину → оформление → оплата), используйте составные цели. Они позволяют отслеживать последовательность действий пользователя.' },
        { type: 'heading', text: 'Связка с Яндекс.Директом' },
        { type: 'paragraph', text: 'После создания целей обязательно добавьте их в настройки кампаний Директа. Это позволит использовать автоматические стратегии на основе конверсий и получать данные о стоимости целевого действия.' },
        { type: 'heading', text: 'Анализ эффективности' },
        { type: 'paragraph', text: 'Регулярно проверяйте отчеты «Источники → Директ» в Метрике. Смотрите на конверсию по кампаниям, стоимость цели, окупаемость вложений. Это поможет вовремя скорректировать стратегию.' }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'cases', 'blog'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">Директолог</div>
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'services', 'cases', 'blog'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === section ? 'text-accent' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' ? 'Главная' : 
                   section === 'about' ? 'Обо мне' :
                   section === 'services' ? 'Услуги' :
                   section === 'cases' ? 'Кейсы' : 'Блог'}
                </button>
              ))}
            </div>
            <Button className="bg-accent hover:bg-accent/90">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
                Специалист по контекстной рекламе
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Настройка и ведение рекламы в Яндекс.Директ
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Помогаю бизнесу привлекать целевых клиентов через эффективную контекстную рекламу. 
                Прозрачная отчетность и гарантированный результат.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90" onClick={() => scrollToSection('services')}>
                  Узнать больше
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('cases')}>
                  Посмотреть кейсы
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-3xl"></div>
                <img 
                  src="https://cdn.poehali.dev/projects/3f317af0-e15b-4032-a58a-e5b7af62697a/files/e21fa147-d799-499d-9e7c-f607c0889ab4.jpg" 
                  alt="Яндекс Метрика с растущими показателями" 
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/ed96751b-379d-4ffc-8348-08717b1b2750.jpg" 
                alt="Обо мне" 
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Обо мне</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Профессионально занимаюсь настройкой и ведением рекламных кампаний в Яндекс.Директ более 5 лет. 
                За это время помог десяткам компаний увеличить продажи и оптимизировать рекламные бюджеты.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-accent mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Сертифицированный специалист</h4>
                    <p className="text-sm text-muted-foreground">Официальная сертификация Яндекс.Директ</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-accent mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Прозрачная аналитика</h4>
                    <p className="text-sm text-muted-foreground">Еженедельные отчеты и доступ к метрикам</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-accent mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Результативность</h4>
                    <p className="text-sm text-muted-foreground">Средний рост конверсий на 40% за 3 месяца</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Услуги</h2>
            <p className="text-muted-foreground text-lg">
              Полный цикл работы с контекстной рекламой в Яндекс.Директ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Settings" className="text-accent" size={24} />
                </div>
                <CardTitle>Настройка кампаний</CardTitle>
                <CardDescription>
                  Создание рекламных кампаний с нуля: сбор семантики, создание объявлений, настройка таргетинга
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" className="text-accent" size={24} />
                </div>
                <CardTitle>Ведение и оптимизация</CardTitle>
                <CardDescription>
                  Ежедневный мониторинг, корректировка ставок, A/B тестирование объявлений, работа с минус-словами
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BarChart3" className="text-accent" size={24} />
                </div>
                <CardTitle>Аналитика и отчеты</CardTitle>
                <CardDescription>
                  Настройка целей в Метрике, подробная аналитика эффективности, регулярные отчеты
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Search" className="text-accent" size={24} />
                </div>
                <CardTitle>Аудит рекламы</CardTitle>
                <CardDescription>
                  Детальный анализ существующих кампаний, выявление проблем и точек роста
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Target" className="text-accent" size={24} />
                </div>
                <CardTitle>Ретаргетинг</CardTitle>
                <CardDescription>
                  Настройка кампаний для возврата потенциальных клиентов, сегментация аудитории
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-accent" size={24} />
                </div>
                <CardTitle>Консультации</CardTitle>
                <CardDescription>
                  Обучение работе с Директом, консультации по стратегии продвижения
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Кейсы</h2>
            <p className="text-muted-foreground text-lg">
              Реальные результаты работы с клиентами
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20"></div>
              <CardHeader>
                <Badge className="w-fit mb-2">E-commerce</Badge>
                <CardTitle className="text-2xl">Интернет-магазин электроники</CardTitle>
                <CardDescription className="text-base mt-2">
                  Увеличили конверсию на 65% при снижении цены клика на 30%. Рост продаж составил 120% за 4 месяца.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div>
                    <div className="text-3xl font-bold text-accent">+65%</div>
                    <div className="text-sm text-muted-foreground">Конверсия</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">-30%</div>
                    <div className="text-sm text-muted-foreground">Цена клика</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">+120%</div>
                    <div className="text-sm text-muted-foreground">Продажи</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20"></div>
              <CardHeader>
                <Badge className="w-fit mb-2">Услуги</Badge>
                <CardTitle className="text-2xl">Образовательные курсы</CardTitle>
                <CardDescription className="text-base mt-2">
                  Снизили стоимость заявки на 45%, увеличили количество регистраций на курсы в 2.5 раза.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div>
                    <div className="text-3xl font-bold text-accent">-45%</div>
                    <div className="text-sm text-muted-foreground">Цена заявки</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">×2.5</div>
                    <div className="text-sm text-muted-foreground">Регистрации</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">+180%</div>
                    <div className="text-sm text-muted-foreground">ROI</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-accent/30 to-primary/10"></div>
              <CardHeader>
                <Badge className="w-fit mb-2">B2B</Badge>
                <CardTitle className="text-2xl">Производство оборудования</CardTitle>
                <CardDescription className="text-base mt-2">
                  Привлекли качественные B2B-лиды, стоимость лида снизилась на 40%, конверсия в продажу выросла на 55%.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div>
                    <div className="text-3xl font-bold text-accent">-40%</div>
                    <div className="text-sm text-muted-foreground">Цена лида</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">+55%</div>
                    <div className="text-sm text-muted-foreground">Конверсия</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">320</div>
                    <div className="text-sm text-muted-foreground">Лидов/мес</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/30"></div>
              <CardHeader>
                <Badge className="w-fit mb-2">Недвижимость</Badge>
                <CardTitle className="text-2xl">Агентство недвижимости</CardTitle>
                <CardDescription className="text-base mt-2">
                  Создали эффективную воронку привлечения покупателей. Увеличили количество показов квартир на 90%.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div>
                    <div className="text-3xl font-bold text-accent">+90%</div>
                    <div className="text-sm text-muted-foreground">Показы</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">-35%</div>
                    <div className="text-sm text-muted-foreground">Цена звонка</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">+75%</div>
                    <div className="text-sm text-muted-foreground">Сделки</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Блог</h2>
            <p className="text-muted-foreground text-lg">
              Полезные материалы о контекстной рекламе
            </p>
          </div>

          {selectedArticle === null ? (
            <>
              <div className="grid md:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                  <Card 
                    key={article.id}
                    className="hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedArticle(article.id)}
                  >
                    <div className={`h-48 bg-gradient-to-br ${
                      index === 0 ? 'from-accent/20 to-primary/20' :
                      index === 1 ? 'from-primary/20 to-accent/20' :
                      'from-accent/30 to-primary/10'
                    }`}></div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{article.category}</Badge>
                        <span className="text-sm text-muted-foreground">{article.readTime}</span>
                      </div>
                      <CardTitle>{article.title}</CardTitle>
                      <CardDescription>
                        {article.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Все статьи блога
                  <Icon name="ArrowRight" className="ml-2" size={18} />
                </Button>
              </div>
            </>
          ) : (
            <div className="max-w-4xl mx-auto">
              <Button 
                variant="ghost" 
                className="mb-8"
                onClick={() => setSelectedArticle(null)}
              >
                <Icon name="ArrowLeft" className="mr-2" size={18} />
                Назад к статьям
              </Button>

              {articles.filter(a => a.id === selectedArticle).map(article => (
                <article key={article.id} className="prose prose-lg max-w-none">
                  <div className="mb-8">
                    <Badge className="mb-4">{article.category}</Badge>
                    <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Icon name="Clock" size={16} />
                        {article.readTime}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {article.content.map((block, idx) => (
                      block.type === 'heading' ? (
                        <h2 key={idx} className="text-2xl font-bold mt-8 mb-4">{block.text}</h2>
                      ) : (
                        <p key={idx} className="text-muted-foreground leading-relaxed">{block.text}</p>
                      )
                    ))}
                  </div>

                  <div className="mt-12 p-6 bg-accent/10 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Нужна помощь с настройкой рекламы?</h3>
                    <p className="text-muted-foreground mb-4">Свяжитесь со мной для консультации</p>
                    <Button className="bg-accent hover:bg-accent/90">
                      Связаться
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          )}


        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">Директолог</h3>
              <p className="text-sm opacity-80">
                Профессиональная настройка и ведение рекламы в Яндекс.Директ
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <div className="space-y-2 text-sm">
                <div className="opacity-80 hover:opacity-100 cursor-pointer">Главная</div>
                <div className="opacity-80 hover:opacity-100 cursor-pointer">Обо мне</div>
                <div className="opacity-80 hover:opacity-100 cursor-pointer">Услуги</div>
                <div className="opacity-80 hover:opacity-100 cursor-pointer">Кейсы</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <div className="space-y-2 text-sm">
                <div className="opacity-80 hover:opacity-100 cursor-pointer">Настройка кампаний</div>
                <div className="opacity-80 hover:opacity-100 cursor-pointer">Ведение рекламы</div>
                <div className="opacity-80 hover:opacity-100 cursor-pointer">Аудит</div>
                <div className="opacity-80 hover:opacity-100 cursor-pointer">Консультации</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm opacity-80">
                <div>info@example.com</div>
                <div>+7 (999) 123-45-67</div>
                <div className="flex gap-3 mt-4">
                  <Icon name="Mail" size={20} className="cursor-pointer hover:opacity-100" />
                  <Icon name="Phone" size={20} className="cursor-pointer hover:opacity-100" />
                  <Icon name="MessageCircle" size={20} className="cursor-pointer hover:opacity-100" />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
            © 2024 Директолог. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;