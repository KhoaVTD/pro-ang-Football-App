/**
 * @Author: KayCrz
 * @Date: 2019-01-05 20:22:53
 * team_name: football club (tên câu lạc bộ)
 * overall_league_position: position on standing (vị trí trên bảng xếp hạng)
 * overall_league_payed (is PLAYED not payed...:D): match played (tổng số trận đã đá)
 * overall_league_W: won (số trận thắng)
 * overall_league_D: drawn (số trận hòa)
 * overall_league_L: lost (số trận thua)
 * overall_league_GF: goal for (số bàn thắng ghi được)
 * overall_league_GA: goal against (số bàn thua phải nhận)
 * [GD]: goal difference (hiệu xuất bàn thắng [GF - GA])
 * overall_league_PTS: points (điểm số)
 */

export interface League {
  team_name: string;
  overall_league_position: string;
  overall_league_payed: string;
  overall_league_W: string;
  overall_league_D: string;
  overall_league_L: string;
  overall_league_GF: string;
  overall_league_GA: string;
  overall_league_PTS: string;
}
