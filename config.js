var config = {}

config.endpoint = 'https://localhost:8081'
config.key = 'C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw=='

config.database = {
  id: 'qandaDB'
}

config.container = {
  id: 'answers'
}

config.items = 
{
  "id": "a2",
  "content": "1 は積分してから微分するとまったく元に戻ることを、2 は微分して積分すると、高々定数の差を除いてもとの関数が現われることをそれぞれ主張するものである。1 を「第一微分積分学の基本定理」、2 を「第二微分積分学の基本定理」と呼ぶことがある。1 の証明は元の関数が面積の関数の導関数の定義そのものであることを利用し、2 の証明においては平均値の定理（またはロルの定理）を用いる方法が一般に知られている。また、3 の式を特に微分積分学の基本公式といい[3]、これを用いて多くの定積分が計算できる。ただし、2 においては導関数が連続でなくとも成立するので、3 よりも汎用性が高い。なお、リーマン積分以外の積分に対しても、基本定理が存在する（たとえばルベーグ積分に対しては Rudin (1976, p. 324) を参照）。",
  "created_at": "yyyy mm dd",
  "answered_by": "u1",
  "comments": []
},
{
  "id": "a3",
  "content": "この事実こそ、発見者のニュートンやライプニッツらを微分積分学の創始者たらしめている重要な定理である。",
  "created_at": "yyyy mm dd",
  "answered_by": "u2",
  "comments": []
}

module.exports = config
